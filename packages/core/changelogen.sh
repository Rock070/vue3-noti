npx changelogen >> log.tmp

cat CHANGELOG.md > CHANGELOG-copy.tmp
cat CHANGELOG-copy.tmp > CHANGELOG.md
cat log.tmp >> CHANGELOG.md
rm CHANGELOG-copy.tmp log.tmp
