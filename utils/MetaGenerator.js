
const generateMeta = (route) => {
  console.log("route", route)
  const lastSegment = route.split('/').pop();
  console.log("lastSegment", lastSegment)
  const capitalizedRoute = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  switch (lastSegment) {
    case '':
      return {
        title: 'YuvaCracy Foundation',
        description: 'YuvaCracy Foundation is a non-profit organization dedicated to promoting education and empowering young people.',
      }
    default:
      return {
        title: `YuvaCracy Foundation | ${capitalizedRoute}`,
        description: `Welcome to YuvaCracy's ${capitalizedRoute} page.`,
      };
  }
};

export default generateMeta;
