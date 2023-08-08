export interface DateTimeProps {
  value: string;
  showOnlyDate?: boolean;
}

export const initialProps: DateTimeProps = {
  value: "Label",
  showOnlyDate: true, // Set either showOnlyDate or showOnlyTime to true
};

const DateTime = ({ value, showOnlyDate }: DateTimeProps) => {
  console.log(value, showOnlyDate);

  return (
    <div className="flex items-center">
      {showOnlyDate ? (
        <p className="text-lg text-gray-900 sm:text-xl">{getOnlyDate(value)}</p>
      ) : (
        <p className="text-lg text-gray-900 sm:text-xl">{value}</p>
      )}
    </div>
  );
};
const getOnlyDate = (value: string) => {
  let date = new Date(value);
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};
export default DateTime;
