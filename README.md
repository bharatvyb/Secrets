# Secrets
Confidential Information Manager PWA


Here's the summary of how we can implement the "Secrets" app:

### **1. App Structure:**
- **Home Page:** Will serve as the main navigation hub with a menu linking to different sections: Banks, Cards, Websites, Apps, Others.
- **Menu Items:** 
  - **Banks:** Store details like Account Number, IFSC Code, Branch Name, Account Holder, etc.
  - **Cards:** Store Credit/Debit card details such as Card Number, Expiry Date, CVV, Bank, and Holder Name.
  - **Websites:** Store website credentials (URL, Username, Password, Notes).
  - **Apps:** Store app-related credentials like Username, Password, and Subscription info.
  - **Others:** Any other custom confidential information.
- **Each screen will have:** A card-based layout for listing records, with options to add, view, edit, and delete entries.
  
### **2. Security Implementation:**
- **Encryption/Decryption:**
  - All sensitive data will be encrypted before being stored and decrypted when displayed.
  - Import/Export will also be encrypted using a user-defined encryption key.
- **Libraries:** Utilize a strong encryption library like `crypto-js` or native Web Crypto API.

### **3. Settings Page:**
- **Custom Dropdowns:** Allow adding/updating/deleting dropdown options for fields like Banks, Cards, and other relevant fields.
- **Manage Tags:** Ability to create and edit tags that can be used across different screens for categorization and searching.

### **4. Change History:**
- Track changes made to sensitive fields (e.g., Passwords, Account Numbers).
- Maintain a history log for each record, allowing users to view previous values with timestamps.

### **5. Data Structure:**
- Use a centralized data array with record objects that include fields like `type`, `category`, `tags`, `encryptedValue`, `history` (for changes), etc.
- **Example Record:**
  ```json
  {
    "type": "website",
    "category": "Social Media",
    "encryptedValue": "encrypted_string",
    "tags": ["personal", "important"],
    "history": [
      {"date": "2023-10-01", "field": "password", "oldValue": "encrypted_old_password"}
    ]
  }
  ```

### **6. UI Design:**
- Follow a consistent layout style similar to the Expense Tracker app.
- **Theme:** Utilize similar color schemes, rounded corners, modern buttons, and form fields.
- **Common Components:** Modal popups for adding/editing records, dropdowns, and navigation menus.

### **7. Main Screens:**
- **Home:** Navigation menu to all the different categories.
- **Category Pages:** Banks, Cards, Websites, Apps, Others — each with an “Add New” button and a list view.
- **History Screen:** Display historical changes for each record.
- **Settings Page:** For managing custom dropdowns and tags.

### **8. Import/Export:**
- Implement import/export in an encrypted format using a user-provided encryption key.
- Format: JSON or TSV, with an option to include/exclude history.

---

This is the initial structure and functionality overview. Let me know your thoughts, and we can fine-tune it before jumping into the implementation!
