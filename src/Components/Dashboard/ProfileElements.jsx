export default function ProfileElements({ name, value }) {
  return (
    <div>
      <p className="text-lg font-light">{name}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
