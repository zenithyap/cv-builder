import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import phone from "../assets/phone.svg";
import email from "../assets/mail.svg";
import portfolio from "../assets/portfolio.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

import "../styles/resumePreview.css";

const styles = StyleSheet.create({
  name: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  page: {
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function ResumePreview({
  profile,
  education,
  experience,
  project,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>{profile.name}</Text>
        </View>
        <View style={styles.links}>
          {profile.phone && (
            <Text style={styles.iconText}>
              <img src={phone} alt="Phone Icon" />
              {profile.phone}
            </Text>
          )}
          {profile.email && (
            <Text style={styles.iconText}>
              <img src={email} alt="Email Icon" />
              <a target="_blank" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </Text>
          )}
          {profile.portfolio && (
            <Text style={styles.iconText}>
              <img src={portfolio} alt="Portfolio Icon" />
              <a target="_blank" href={profile.portfolio}>
                {profile.portfolio}
              </a>
            </Text>
          )}
          {profile.github && (
            <Text style={styles.iconText}>
              <img src={github} alt="Github Icon" />
              <a target="_blank" href={profile.github}>
                {profile.github}
              </a>
            </Text>
          )}
          {profile.linkedin && (
            <Text style={styles.iconText}>
              <img src={linkedin} alt="LinkedIn Icon" />
              <a target="_blank" href={profile.linkedin}>
                {profile.linkedin}
              </a>
            </Text>
          )}
        </View>
      </Page>
    </Document>
  );
}
