function skillsMember()
{
    var member = new Object();
    member.name = "John";
    member.age = 25;
    member.skills = ["JavaScript", "HTML", "CSS"];
    return member;
}

var member1 = skillsMember();
console.log(member1.name);
console.log(member1.age);
console.log(member1.skills);