module.exports = {
  filter: name => !name.toLowerCase().includes('storybook'),
  doctor: true,
  doctorTest: 'npm run update:doctor'
}
