from pynput import keyboard

def on_press(key):
    try:
        # Handle alphanumeric keys
        print(f"Key pressed: {key.char}")
    except AttributeError:
        # Handle special keys (e.g., ctrl, shift)
        print(f"Special key pressed: {key}")

def on_release(key):
    if key == keyboard.Key.esc:
        # Stop listener on ESC
        print("Exiting...")
        return False

# Start listening
with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()

