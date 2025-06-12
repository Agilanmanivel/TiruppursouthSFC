// Customize your member details
const name = "Agilan M";
const id = "TSFC001";
const membership = "Platinum";
const valid = "31-Dec-2025";

// Inject content into HTML
document.getElementById("memberName").textContent = "Member Name: " + name;
document.getElementById("memberID").textContent = "Member ID: " + id;
document.getElementById("memberType").textContent = "Membership: " + membership;
document.getElementById("validTill").textContent = "Valid Till: " + valid;

// Generate QR Code
const qrData = encodeURIComponent(name + id);
document.getElementById("qrImage").src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=100x100`;
