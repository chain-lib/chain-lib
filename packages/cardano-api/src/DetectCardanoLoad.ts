/**
 * This function waits until the cardano namespace has been generated
 *
 * @param Configuration - This configuration file excepts the following parameters.
 *  - `silent` : Default false. This allows the silencing of errors, if we query the cardano namespace and it is not there yet (queries multiple times before loading usually.)
 *  - `timeout` : Default 3000. This is the max amount of time to wait (in ms) for the cardano namespace before throwing errors.
 *  - `waitAfterNamespaceResolved` : Default 0. This is how long after the cardano namespace resolves to wait, for other modules in it to resolve. Useful if some wallets load slower.
 * @returns The cardano namespace.
*/
function detectCardanoProvider({
    silent = false,
    timeout = 3000,
    waitAfterNamespaceResolved = 0
  } = {}): Promise<unknown> {
  
    _validateInputs();
  
    let handled = false;
  
    return new Promise((resolve) => {
      if (window.cardano) {
  
        handleCardano();
  
      } else {
  
        window.addEventListener(
          'cardano#initialized',
          handleCardano,
          { once: true },
        );
  
        setTimeout(() => {
          handleCardano();
        }, timeout);
      }
  
      function handleCardano() {
  
        if (handled) {
          return;
        }
        handled = true;
  
        window.removeEventListener('cardano#initialized', handleCardano);
  
        const { cardano } = window;
  
        if (cardano) {
          setTimeout(()=>{
            resolve(cardano)
          }, waitAfterNamespaceResolved)
        } else {
  
          const message = 'Unable to detect window.cardano.';
  
          !silent && console.error(message);
          resolve(null);
        }
      }
    })

    function _validateInputs() {
        if (typeof silent !== 'boolean') {
          throw new Error('Expected option silent to be a boolean.');
        }
        if (typeof timeout !== 'number') {
          throw new Error('Expected option timeout to be a number.');
        }
      }
    }
 
export const detectCardanoLoad = detectCardanoProvider