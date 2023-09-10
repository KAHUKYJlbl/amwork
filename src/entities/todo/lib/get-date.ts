import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

const getDate = (): string => {
  return dayjs( faker.date.anytime() ).format('MMM D, hh:mm A');
}

export default getDate;