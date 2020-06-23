import { format } from 'date-fns';

const formatDate = (date: string): string =>
  format(new Date(date), "dd/MM/yyyy 'às' HH:mm:ss");

export default formatDate;
