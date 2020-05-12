# IsTrusted event Debugger API
 Dispatch event.isTrusted === true with Debugger API Chrome.
 
 This example was used as a reference: https://developer.chrome.com/extensions/samples#search:debugger

 - Click the extension icon to enable debugger;
 - Click 't' to dispatch trusted 'mousedown' and 'mouseup' events;
 - Click 'r' to dispatch regular javascript events.
 
 You can see that clicking 't' results in isTrusted===true;
You can also see that dispatching a trusted event via debugger might take around 2ms, while dispatching a regular event takes 0ms.
