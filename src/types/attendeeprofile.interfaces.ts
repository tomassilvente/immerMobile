export interface InputFieldProps {
  type: string;
  placeholder: string;
  value?: any;
  onChange?: (e: any) => void;
}

export interface ProfileImageProps {
  headerImgSrc?: string
  avatarImgSrc?: string
}
