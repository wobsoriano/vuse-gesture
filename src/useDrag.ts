import { dragAction, registerAction } from '@use-gesture/core/actions'
import type { EventTypes, Handler, UserDragConfig } from '@use-gesture/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Drag composable.
 *
 * @param {Handler<'drag'>} handler - the function fired every time the drag gesture updates
 * @param {UserDragConfig} config - the config object including generic options and drag options
 */
export function useDrag<EventType = EventTypes['drag'], Config extends UserDragConfig = UserDragConfig>(
  handler: Handler<'drag', EventType>,
  config?: Config,
) {
  registerAction(dragAction)
  return useRecognizers({ drag: handler }, config || {}, 'drag')
}
