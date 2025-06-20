⏺ # Copy-to-Clipboard UX Design Specification

  Overview

  A dual-feedback system for copy-to-clipboard actions that provides clear visual
  confirmation without blocking user interaction.

  Components

  1. Trigger Button

  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 
  text-sm font-medium">
      📋 Copy Activity Summary
  </button>
  - Button text remains constant (no text changes)
  - Standard hover effects only
  - Maintains predictable behavior

  2. Status Message (Below Button)

  <div id="copyStatus"></div>

  Success State:
  <div class="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 
  rounded-lg">
      <p class="font-medium">✅ Copied to Clipboard!</p>
      <p class="text-sm mt-1">Now paste in Google Docs: <strong>Edit → Paste special → Paste
   from markdown</strong></p>
  </div>

  Error State:
  <div class="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg">
      <p class="font-medium">❌ Copy Failed</p>
      <p class="text-sm">Please select and copy the text manually.</p>
  </div>

  3. Floating Toast Notification

  const notification = document.createElement('div');
  notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: 
  #22c55e; color: white; padding: 16px 24px; border-radius: 8px; box-shadow: 0 4px 6px 
  rgba(0,0,0,0.1); z-index: 9999; font-weight: 500;';
  notification.textContent = '✅ Activity summary copied!';

  Timing Specifications

  - Status message duration: 3 seconds
  - Toast notification duration: 2.5 seconds visible + 0.5 second fade-out
  - No blocking alerts - All feedback is non-intrusive

  Layout Structure

  <div className="flex flex-col items-center">
      <button onClick={handleCopy}>📋 Copy Activity Summary</button>
      <div id="copyStatus"></div>
  </div>

  Copy Function with Fallback

  const copyToClipboard = async (text) => {
      try {
          // Modern API
          if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(text);
              return true;
          } else {
              // Fallback for older browsers/file:// protocol
              const textArea = document.createElement('textarea');
              textArea.value = text;
              textArea.style.position = 'fixed';
              textArea.style.left = '-999999px';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();

              try {
                  const successful = document.execCommand('copy');
                  document.body.removeChild(textArea);
                  return successful;
              } catch (err) {
                  document.body.removeChild(textArea);
                  return false;
              }
          }
      } catch (err) {
          console.error('Copy failed:', err);
          return false;
      }
  };

  Key Features

  1. Dual feedback system - Both inline and floating notifications
  2. Non-blocking - No alerts that interrupt workflow
  3. Helpful instructions - Includes paste instructions for Google Docs
  4. Graceful degradation - Works with older browsers via fallback
  5. Clear timing - 3-second visibility for all feedback elements
  6. Accessibility - Clear success/error states with appropriate colors

  Color Palette

  - Success: Green (#22c55e, #16a34a)
  - Error: Red (#ef4444, #dc2626)
  - Button: Orange (#f97316, #ea580c)