// Copyright 2017-2021 @canvas-ui/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useState } from "react";

import useIsMountedRef from "./useIsMountedRef";

export default function useIncrement(defaultValue = 1): [number, () => void, (value: number) => void] {
  const mountedRef = useIsMountedRef();
  const [value, setValue] = useState(defaultValue);
  const increment = useCallback((): void => {
    mountedRef.current && setValue((value: number) => ++value);
  }, [mountedRef]);

  return [value, increment, setValue];
}
