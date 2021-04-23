const { Group } = require('../ch06-objects/groups');
const { GroupIterator } = require('../ch06-objects/iterable-groups');

test('Group object is iterable', () => {
    let group = Group.from(["a", "b", "c"]);
    expect(group).toHaveProperty([Symbol.iterator]);
});
