export type IconProps = {
    isToggled: boolean;
    IconOn: React.ComponentType<{ onClick: () => void, width: number, height: number, className: string }>;
    IconOff: React.ComponentType<{ onClick: () => void, width: number, height: number, className: string }>;
    onClick: () => void;
    width: number;
    height: number;
    className: string;
};

export type State = {
    commentOpen: boolean;
    shareOpen: boolean;
    likeButton: boolean;
    follow: boolean;
    settingsOpen: boolean;
    [key: string]: boolean;
  };
  