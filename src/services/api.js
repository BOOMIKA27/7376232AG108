export const fetchNotifications = async () => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications"
    );

    const data = await response.json();

    return data.notifications || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};