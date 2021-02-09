// Copyright 2017-2021 @canvas-ui/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react'

import { ModalState } from './types'
import useToggle from './useToggle'

export default function useModal(defaultIsOpen?: boolean, onOpen?: () => void, onClose?: () => void): ModalState {
  const [isOpen, , setIsOpen] = useToggle(defaultIsOpen || false)
  const _onOpen = useCallback((): void => {
    setIsOpen(true)

    onOpen && onOpen()
  }, [onOpen, setIsOpen])
  const _onClose = useCallback((): void => {
    setIsOpen(false)

    onClose && onClose()
  }, [onClose, setIsOpen])

  return { isOpen, onClose: _onClose, onOpen: _onOpen }
}
