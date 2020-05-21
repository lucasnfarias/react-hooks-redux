import React from 'react';

import { useSelector } from 'react-redux';

const Video = () => {
  const activeModule = useSelector(state => state.course.activeModule);
  const activeLesson = useSelector(state => state.course.activeLesson);


  return (
    <div>
      <strong>Módulo: {activeModule?.title}</strong>
      <span>Aula: {activeLesson?.title}</span>
    </div>
  );
}

export default Video;