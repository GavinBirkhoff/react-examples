# useTransition
useTransition is a React Hook that lets you update the state without blocking the UI.

- Marking a state update as a non-blocking transition
- Updating the parent component in a transition
- Displaying a pending visual state during the transition
- Preventing unwanted loading indicators
- Building a Suspense-enabled router

You can’t call useTransition outside a component because it’s a Hook. In this case, use the standalone startTransition method instead. It works the same way, but it doesn’t provide the isPending indicator.