type LoadingState = { state: 'loading' };

type SuccessState = { state: 'success'; response: { body: string } };

type FailState = { state: 'fail'; reason: string };

type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLogState(state: ResourceLoadState) {
  switch (state.state) {
    case 'loading':
      console.log('loading...');
      break;
    case 'success':
      console.log(state.response.body);
      break;
    case 'fail':
      console.log(state.reason);
      break;
    default:
      throw new Error(`unknown state: ${state}`);
  }
}

printLogState({ state: 'loading' }); // loading...

printLogState({ state: 'success', response: { body: 'loaded' } }); // loaded

printLogState({ state: 'fail', reason: 'no network' }); // no network
