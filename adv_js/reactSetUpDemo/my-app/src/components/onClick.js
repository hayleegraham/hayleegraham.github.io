import Users from "../data/Users";

function onClick() {
  console.log("clicked");
  Users.push({ name: "Poop", color: "brown", id: 3 });
}

export default onClick;
