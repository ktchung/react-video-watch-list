import { type FC, memo, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { VideoContext } from '../../contexts/VideoContext';
import VideoCardGrid from '../VideoCardGrid';

interface Props {}

const VideoList: FC<Props> = () => {
  const { videos, updateVideoEpNum, updateIsCompleted } = useContext(VideoContext);

  const {
    isEditing, setEditingItem, setRemovingItem
  } = useContext(AppContext);

  return (
    <VideoCardGrid
      videos={videos}
      isEditing={isEditing}
      onSelectEdit={setEditingItem}
      onRemove={setRemovingItem}
      onUpdateEpNum={updateVideoEpNum}
      onUpdateIsCompleted={updateIsCompleted}
    />
  );
};

export default memo(VideoList);
