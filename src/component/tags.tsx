export default ({
  data = []
}) => {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', width: '50vw' }}>
      {data.map((tag: any) => {
        return (
          <div key={tag.name} className="my-tag">
            {tag.name}
          </div>
        );
      })}
    </div>
  );
};
