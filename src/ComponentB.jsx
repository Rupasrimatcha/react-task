import { useSelector } from "react-redux";
import './ComponentB.css'

export default function ComponentB() {
  const submissions = useSelector((state) => state.form.submissions);

  return (
    <section className="form-data">
      <h2>Submitted Form Data</h2>
      {submissions.length === 0 ? (
        <p>No form submissions yet.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={`${submission.email}-${index}`}>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>{submission.phone}</td>
                  <td>{submission.city}</td>
                  <td>{submission.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}