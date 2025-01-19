const dayOfWeekMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const isAfterOpenTime = (openTime: string, now: string) => {
  return Number(now) > Number(openTime) ? true : false;
  } 
  
  const isBeforeCloseTime = (closeTime: string, now: string) => {
  return Number(now) < Number(closeTime) ? true : false;
}

export const isOpenNow = (day: string, open: string, close: string) => {
  const now = new Date();
  const dayOfWeek = now.getDay();

  if (dayOfWeek !== dayOfWeekMap.indexOf(day)) {
    return false
  }

  const hours = now.getHours();
  const mins = now.getMinutes();

  const [openTimeOfDay, openAmOrPm] = open.split(' ');
  const [openHourOfDay, openMinOfDay] = openTimeOfDay.split(':');

  const militaryOpenHour = openAmOrPm === 'PM' ? (Number(openHourOfDay) + 12).toString() : openHourOfDay;
  const militaryOpenHourWithMins = militaryOpenHour + openMinOfDay;

  const [closeTimeOfDay, closeAmOrPm] = close.split(' ');
  const [closeHourOfDay, closeMinOfDay] = closeTimeOfDay.split(':');

  const militaryCloseHour = closeAmOrPm === 'PM' ? (Number(closeHourOfDay) + 12).toString() : closeHourOfDay;
  const militaryCloseHourWithMins = militaryCloseHour + closeMinOfDay;

  return isAfterOpenTime(militaryOpenHourWithMins, hours.toString() + mins.toString()) && isBeforeCloseTime(militaryCloseHourWithMins, hours.toString() + mins.toString()) ? true : false;
}