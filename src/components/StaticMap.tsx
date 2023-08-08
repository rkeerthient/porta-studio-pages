export interface StaticMapProps {
  address: string;
}

export const initialProps: StaticMapProps = {
  geoCoordinateField: "0,0", // Replace with your actual string format
};

export default function StaticMap({ geoCoordinateField }: StaticMapProps) {
  const [latitude, longitude] = geoCoordinateField.split(",");

  return (
    <div className="col-start-2 row-span-2 self-center">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        <img
          className="w-full"
          width="300"
          height="200"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C${latitude},${longitude}&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18`}
          alt="Static Map"
        />
      </div>
    </div>
  );
}
