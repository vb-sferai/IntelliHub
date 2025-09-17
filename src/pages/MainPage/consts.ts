import BackgroundImage from '../../assets/imgs/orange-background.png';

export const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    zIndex: -100,
};
