declare module 'react-modal-video' {
    import * as React from 'react';
  
    interface ModalVideoProps {
      channel: string;
      isOpen: boolean;
      videoId: string;
      onClose: () => void;
      autoplay?: boolean;
    }
  
    export default class ModalVideo extends React.Component<ModalVideoProps> {}
  }
  