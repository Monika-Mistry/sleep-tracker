import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

export type SleepRecordFormData = {
  name: string;
  gender: string;
  duration: string;
};

type SleepRecordFormProps = {
  onSubmit: (formData: SleepRecordFormData, onSuccessCb: () => void) => void;
};

const SleepRecordForm = ({ onSubmit }: SleepRecordFormProps) => {
  const [formData, setFormData] = useState<SleepRecordFormData>({
    name: "",
    gender: "",
    duration: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, gender: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData, () =>
      setFormData({ name: "", gender: "", duration: "" })
    );
  };

  const handleCancel = () => {
    setFormData({ name: "", gender: "", duration: "" });
  };

  return (
    <Paper style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleGenderChange}
                aria-required
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="non-binary"
                  control={<Radio />}
                  label="Non-Binary"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Sleep Duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <div
              style={{ display: "flex", gap: "16px", justifyContent: "end" }}
            >
              <Button
                variant="text"
                color="secondary"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SleepRecordForm;
