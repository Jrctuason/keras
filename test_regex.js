const body = `This PR addresses a bug where \`deserialize_keras_object\` accepts callable objects (functions or lambdas) in configuration fields without validation. These callables could be stored and invoked during execution (e.g., in \`build()\`), potentially causing unexpected runtime behavior.

The fix introduces a recursive check (\`_check_for_raw_callables\`) that intercepts raw Python callables embedded anywhere within the configuration dictionary or lists before deserialization begins. This check runs when \`safe_mode=True\` (the default). A test case has been added to ensure that raw callables raise a \`TypeError\` in \`safe_mode=True\`, while allowing them to pass through when \`safe_mode=False\`.

**Contributor Agreement:**
- [x] I am a human, and not a bot.
- [x] I will be responsible for responding to review comments in a timely manner.
- [x] I will work with the maintainers to push this PR forward until submission.
`;

const requiredTerms = [
  'I am a human, and not a bot.',
  'I will be responsible for responding to review comments in a timely manner.',
  'I will work with the maintainers to push this PR forward until submission.'
];

const unchecked = [];
for (const term of requiredTerms) {
  // Check that the checkbox is checked: [x] or [X]
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexStr = `-\\s*\\[\\s*[xX]\\s*\\]\\s*${escaped}`;
  const checkedPattern = new RegExp(regexStr);
  console.log(checkedPattern)
  if (!checkedPattern.test(body)) {
    unchecked.push(term);
  }
}

console.log(unchecked);
