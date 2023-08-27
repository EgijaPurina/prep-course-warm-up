export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email: any) {
    const atIndex = email.indexOf('@');

    if (atIndex >= 2) {
        const localPart = email.slice(0, atIndex);
        const protectedLocalPart = localPart.slice(0, 2) + '...';
    const domainPart = email.slice(atIndex);
    return protectedLocalPart + domainPart;
  } else {
    return '...@' + email.slice(atIndex + 1);
    }
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com