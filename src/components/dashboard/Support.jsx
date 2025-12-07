// Support.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

// 🔹 Change this to your real backend endpoint
const API_ENDPOINT = "https://your-backend.com/api/support-tickets";

const initialFormState = {
  memberId: "",
  fullName: "",
  mobile: "",
  email: "",
  category: "wallet",
  priority: "medium",
  subject: "",
  description: "",
  attachment: null,
};

const Support = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileKey, setFileKey] = useState(0); // to reset file input

  const tickets = [
    {
      id: "LSA-1024",
      subject: "Payout not reflecting in wallet",
      createdOn: "02 Dec 2025",
      status: "Open",
      priority: "High",
    },
    {
      id: "LSA-0991",
      subject: "KYC documents verification",
      createdOn: "28 Nov 2025",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: "LSA-0950",
      subject: "Unable to login to member panel",
      createdOn: "21 Nov 2025",
      status: "Resolved",
      priority: "High",
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Open":
        return "status-badge status-open";
      case "In Progress":
        return "status-badge status-progress";
      case "Resolved":
        return "status-badge status-resolved";
      default:
        return "status-badge";
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority-badge priority-high";
      case "Medium":
        return "priority-badge priority-medium";
      case "Low":
        return "priority-badge priority-low";
      default:
        return "priority-badge";
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      attachment: file,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setFileKey((prev) => prev + 1); // remount file input
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      // Build FormData for file upload support
      const payload = new FormData();
      payload.append("memberId", formData.memberId);
      payload.append("fullName", formData.fullName);
      payload.append("mobile", formData.mobile);
      payload.append("email", formData.email);
      payload.append("category", formData.category);
      payload.append("priority", formData.priority);
      payload.append("subject", formData.subject);
      payload.append("description", formData.description);

      if (formData.attachment) {
        payload.append("attachment", formData.attachment);
      }

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: payload,
        // ❗ Don't set Content-Type manually when using FormData.
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to submit ticket");
      }

      setSuccessMsg("Your ticket has been submitted successfully 🎟️");
      resetForm();
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err.message ||
          "Something went wrong while submitting your ticket. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="support-page">
      {/* Glow background layer */}
      <div className="support-glow support-glow-1" />
      <div className="support-glow support-glow-2" />

      {/* Hero section */}
      <motion.div
        className="support-hero"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <div className="support-hero-left">
          <p className="support-badge">Support Center</p>
          <h1>
            Need <span>Help</span>? We&apos;re here for you.
          </h1>
          <p className="support-hero-subtitle">
            Raise a ticket for any issue related to your Life Spart Associates
            account, payouts, products or orders. Our team will respond as soon
            as possible.
          </p>

          <div className="support-hero-stats">
            <div className="support-hero-stat">
              <span className="support-hero-stat-label">Average Response</span>
              <span className="support-hero-stat-value">4–6 hrs</span>
            </div>
            <div className="support-hero-stat">
              <span className="support-hero-stat-label">Support Hours</span>
              <span className="support-hero-stat-value">Mon–Sat, 10am–7pm</span>
            </div>
          </div>
        </div>

        <motion.div
          className="support-hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="support-hero-card">
            <p className="support-hero-card-title">Ticket Status Legend</p>
            <div className="support-legend-row">
              <span className="status-badge status-open">Open</span>
              <span className="support-legend-text">New / awaiting response</span>
            </div>
            <div className="support-legend-row">
              <span className="status-badge status-progress">
                In Progress
              </span>
              <span className="support-legend-text">
                Our team is working on it
              </span>
            </div>
            <div className="support-legend-row">
              <span className="status-badge status-resolved">
                Resolved
              </span>
              <span className="support-legend-text">
                Issue has been closed
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main layout: form + tips */}
      <div className="support-main">
        <motion.div
          className="support-card support-form-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="support-card-header">
            <h2>Create Support Ticket</h2>
            <p>Fill in the details below so we can help you faster.</p>
          </div>

          {/* Success / error messages */}
          {successMsg && (
            <div className="support-alert support-alert-success">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="support-alert support-alert-error">{errorMsg}</div>
          )}

          <form onSubmit={handleSubmit} className="support-form">
            <div className="support-form-grid">
              <div className="support-field">
                <label htmlFor="memberId">Member ID</label>
                <input
                  id="memberId"
                  type="text"
                  placeholder="Enter your Member ID"
                  autoComplete="off"
                  required
                  value={formData.memberId}
                  onChange={handleChange}
                />
              </div>
              <div className="support-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="support-field">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Registered mobile number"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="support-field">
                <label htmlFor="email">Email ID</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Registered email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="support-field">
                <label htmlFor="category">Issue Category</label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleSelectChange}
                >
                  <option value="wallet">Wallet / Payout</option>
                  <option value="login">Login / Account</option>
                  <option value="kyc">KYC / Verification</option>
                  <option value="order">Order / Product</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="support-field">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  value={formData.priority}
                  onChange={handleSelectChange}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="support-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Short title for your issue"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="support-field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="4"
                placeholder="Describe your issue with as many details as possible (transaction ID, date, screenshots, etc.)"
                required
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="support-form-footer">
              <div className="support-upload">
                <label className="support-upload-label">
                  <span className="support-upload-icon">📎</span>
                  Attach screenshot (optional)
                  <input
                    key={fileKey}
                    type="file"
                    accept="image/*,.pdf"
                    className="support-upload-input"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="support-upload-hint">
                  Max size 5MB. Supported: JPG, PNG, PDF
                </p>
              </div>

              <div className="support-buttons">
                <motion.button
                  type="button"
                  className="btn-secondary"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  onClick={resetForm}
                  disabled={loading}
                >
                  Reset
                </motion.button>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: loading ? 1 : 1.03, y: loading ? 0 : -1 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Ticket"}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Tips / FAQ side card */}
        <motion.div
          className="support-card support-tips-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h3>Tips for Faster Resolution</h3>
          <ul className="support-tips-list">
            <li>
              ✅ Always mention your <strong>Member ID</strong> and{" "}
              <strong>registered mobile number</strong>.
            </li>
            <li>
              ✅ For payout issues, add <strong>transaction ID</strong>,{" "}
              <strong>date</strong> and <strong>amount</strong>.
            </li>
            <li>
              ✅ Attach <strong>clear screenshots</strong> of errors or
              messages you see.
            </li>
            <li>
              ✅ Avoid sending multiple tickets for the{" "}
              <strong>same issue</strong>.
            </li>
          </ul>

          <div className="support-quick-links">
            <p className="support-quick-title">Need urgent help?</p>
            <p className="support-quick-text">
              For high-priority issues, you can also contact your{" "}
              <strong>upline leader</strong> or customer support number shown
              in your dashboard.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Recent tickets table */}
      <motion.div
        className="support-card support-table-card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="support-card-header">
          <h2>Your Recent Tickets</h2>
          <p>Track the status of your last few support requests.</p>
        </div>

        <div className="support-table-wrapper">
          <table className="support-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Created On</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <motion.tr
                  key={ticket.id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <td>{ticket.id}</td>
                  <td className="support-subject-cell">{ticket.subject}</td>
                  <td>{ticket.createdOn}</td>
                  <td>
                    <span className={getPriorityClass(ticket.priority)}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <span className={getStatusBadgeClass(ticket.status)}>
                      {ticket.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Support;
