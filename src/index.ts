/**
 * Sample function shipped with the template. Replace it with your own module.
 *
 * @param input - Text echoed back while Sleepy is awake.
 * @param isSleepySleeping - When `true`, returns the sleeping face instead.
 * @returns A friendly face, optionally carrying your `input`.
 */
export default function sleepySays (
  input: string,
  isSleepySleeping = false
): string {
  if (isSleepySleeping) {
    return '(◡ ‿ ◡ ✿) zZZz'
  }

  return `( o ‿ ~ ✿) ${input}`
}
