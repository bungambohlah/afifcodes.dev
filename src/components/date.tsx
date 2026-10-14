import moment from 'moment';

type DateProps = {
  dateString: string;
};
export default function Date({ dateString }: DateProps): React.JSX.Element {
  const date = moment(dateString).toISOString();
  return (
    <time dateTime={dateString}>{moment(date).format('MMMM d, yyyy')}</time>
  );
}
