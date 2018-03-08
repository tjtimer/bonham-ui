/**
 * all global channels should be placed here.
 * Usage:
 *      const myReceiver = new Receiver('my-topic')
 *      
 *      export default {
 *          myReceiver
 *      }
 * 
 *      *at your module actions:*
 *          import { myReceiver } from '../../channels'
 *          
 *          export default {
 *              setup(store) {
 *                  const channels = await Promis.all([
 *                                           myReceiver.setup(store, myHandler),
 *                                          ])
 *                  const setupPayload = {
 *                      channels
 *                  }
 *                  ...
 *                  store.commit(mutation_types.ON_SETUP, setupPayload)
 *              }
 *          }
 */

const debugReceiver = new Receiver('debug')
const infoReceiver = new Receiver('info')
const warningReceiver = new Receiver('warning')
const errorReceiver = new Receiver('error')

export default {
    debugReceiver,
    infoReceiver,
    warningReceiver,
    errorReceiver
}