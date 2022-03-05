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