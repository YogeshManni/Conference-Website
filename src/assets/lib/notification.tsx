export const openNotificationWithIcon = (
  api: any,
  type: string,
  title: string,
  desc: string
) => {
  api[type]({
    message: title,
    description: desc,
  });
};
