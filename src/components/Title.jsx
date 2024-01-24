export const Title = ({ children, icon, tag: Tag = 'h2', ...props }) => (
    <Tag
      css={{
        fontSize: '2em',
        fontWeight: 'bold',
        letterSpacing: '-0.025em',
        lineHeight: 1.1,
        margin: '0 0 1em',
      }}
    >
      {icon ? (
        <span css={{ position: 'absolute', transform: 'translateY(-100%)' }}>
          {icon}
        </span>
      ) : null}
      {children}
    </Tag>
  );