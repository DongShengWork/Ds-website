const tags = [
  {
    name: 'JS',
  },
];

export default () => {
  return (
    <div>
      {tags.map((tag) => {
        return <div>{tag.name}</div>;
      })}
    </div>
  );
};
