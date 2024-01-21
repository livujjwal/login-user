import { useEffect, useState } from "react";

const Profile = () => {
  const id = localStorage.getItem("id");
  const [userInfo, setuserInfo] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    setuserInfo(data);
  }
  if (!userInfo) return "";
  const {
    company,
    age,
    lastName,
    image,
    height,
    gender,
    firstName,
    bloodGroup,
    address,
    weight,
    phone,
    university,
    maidenName,
  } = userInfo;
  console.log(userInfo);
  return (
    <div className="flex flex-col w-screen mt-20 justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col w-6/12 mx-auto">
        <h1 className="text-center text-lg font-medium">
          {firstName} {maidenName} {lastName}
        </h1>
        <img className="w-60 h-60 rounded-full self-center p-2" src={image} />
        <div className="justify-start">
          <h1>Personal Info :</h1>
          <h1>
            Age : {age} Gender : {gender}
          </h1>
          <h1>
            Weight : {weight} Height : {height} Blood Group : {bloodGroup}
          </h1>
          <h1>
            Address : {company.address.address} {company.address.city}{" "}
            {company.address.state}
          </h1>
          <h1 className="text-left">Mobile : {phone}</h1>
          <h1 className="text-left">
            Address : {address.address} {address.city} {address.state}{" "}
            {address.postalCode}
          </h1>
          <h1 className="text-left">College : {university}</h1>
          <h1>Company Profile</h1>
          <h1>
            Name : {company.name} Post : {company.title}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
