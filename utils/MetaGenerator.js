const capitalizeWord = (word) => {
  const lowerWord = word.toLowerCase();

  if (lowerWord === "yuvacracy") return "YuvaCracy";
  if (lowerWord === "ycpr") return "YCPR";
  if (lowerWord === "ycla") return "YCLA";

  return word.charAt(0).toUpperCase() + word.slice(1);
};

const generateMeta = (route) => {
  console.log("route", route);
  const lastSegment = route.split("/").pop();
  console.log("lastSegment", lastSegment);
  const capitalizedWords = lastSegment.split("-").map(capitalizeWord).join(" ");
  // const capitalizedRoute = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  switch (lastSegment) {
    case "":
      return {
        title: "YuvaCracy Foundation",
        description:
          "YuvaCracy Foundation is a non-profit organization dedicated to promoting education and empowering young people.",
      };
    default:
      return {
        title: `YuvaCracy Foundation | ${capitalizedWords}`,
        description: `Welcome to YuvaCracy's ${capitalizedWords} page.`,
      };
  }
};

export default generateMeta;
