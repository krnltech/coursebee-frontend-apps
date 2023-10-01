const ratedBy = [
  { avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp" },
  {
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const UserRating = ({ className }: { className?: string }) => {
  return (
    <>
      {ratedBy.map((user, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          data-animate="text"
          data-delay={`1.${i}`}
          key={i + "user"}
          src={user.avatar}
          className={`${className} ${i ? "-ml-2" : ""}`}
          alt="Avatar"
        />
      ))}
    </>
  );
};

export default UserRating;
