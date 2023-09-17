import EnrolledCourseProfileCard from "@/features/profile/EnrolledCourseProfileCard";
import ProfileCard from "@/features/profile/ProfileCard";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h3 className="mt-12">Profile</h3>
      <ProfileCard />
      <EnrolledCourseProfileCard />
    </div>
  );
};

export default ProfilePage;
