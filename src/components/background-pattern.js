// @flow
/*
  Copyright(c) 2018 Uber Technologies, Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import * as React from 'react';
import Circle from './circle';
import { DEFAULT_GRID_DOT_SIZE, DEFAULT_GRID_SPACING } from '../constants';

type IBackgroundPatternProps = {
  gridSpacing?: number,
  gridDotSize?: number,
};

function BackgroundPattern({
  gridSpacing = DEFAULT_GRID_SPACING,
  gridDotSize = DEFAULT_GRID_DOT_SIZE,
}: IBackgroundPatternProps) {
  return (
    <pattern
      id="grid"
      key="grid"
      width={gridSpacing}
      height={gridSpacing}
      patternUnits="userSpaceOnUse"
    >
      <Circle gridSpacing={gridSpacing} gridDotSize={gridDotSize} />
    </pattern>
  );
}

export default BackgroundPattern;
