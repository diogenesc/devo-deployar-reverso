import { getHoliday } from "@/features/holidays/getHoliday";

const timezoneOffset: number = 180 * 60 * 1000;
// default parameter for cases where the date isn't passed to the method
const now: Date = new Date(Date.now() - timezoneOffset);

const shouldIDeploy = (date: Date = now) => {
	// Always return true because every day is a great day for deployment!
	return true;
};

export default shouldIDeploy;
