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
    paddingInline: "1.5rem 3rem",
    height: "calc(100vh - 100px)",
    overflowY: 'auto',
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sectionTitle: {
    display: "flex",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderBottom: "3px solid black",
  },
  titleDateRow: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  list: {
    marginLeft: "1.5rem",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default function ResumePreview({
  profile,
  education,
  experience,
  projects,
}) {
  return (
    <Document style={styles.page}>
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
        <View style={styles.section}>
          {education.length > 0 && <Text style={styles.sectionTitle}>Education</Text>}
          {education.map((entry) => (
            <View>
              <View style={styles.titleDateRow}>
                <Text>{entry.school}</Text>
                <Text>
                  {entry.from && <Text>{entry.from} - </Text>} {entry.to}
                </Text>
              </View>
              <Text style={styles.bold}>{entry.qualifications}</Text>
              <ul style={styles.list}>
                {entry.details.map((detail) => (
                  <Text>
                    <li>{detail.text}</li>
                  </Text>
                ))}
              </ul>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          {experience.length > 0 && <Text style={styles.sectionTitle}>Work Experience</Text>}
          {experience.map((entry) => (
            <View>
              <View style={styles.titleDateRow}>
                <Text>{entry.company}</Text>
                <Text>
                  {entry.from && <Text>{entry.from} - </Text>} {entry.to}
                </Text>
              </View>
              <Text style={styles.bold}>{entry.position}</Text>
              <ul style={styles.list}>
                {entry.details.map((detail) => (
                  <Text>
                    <li>{detail.text}</li>
                  </Text>
                ))}
              </ul>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          {projects.length > 0 && <Text style={styles.sectionTitle}>Projects</Text>}
          {projects.map((entry) => (
            <View>
              <View style={styles.titleDateRow}>
                <Text>{entry.name}</Text>
              </View>
              <ul style={styles.list}>
                {entry.details.map((detail) => (
                  <Text>
                    <li>{detail.text}</li>
                  </Text>
                ))}
              </ul>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
