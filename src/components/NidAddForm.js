import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { API } from "aws-amplify";
import { AmplifySignOut } from '@aws-amplify/ui-react'

const { v4: uuidv4 } = require('uuid');

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    margin: '1.5rem auto',
    width: '80%',
    padding: '1rem',
  },
});

class NidAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      editorID: "",
      sourceURL: "",
      sourceDomain: "",
      authors: "",
      categories: "",
      keywords: "",
      stocks: "",
      imageURL: "",
      title: "",
      cta: "",
      summary: "",
      htmlContent: ""
    };
  }
  handleChange = event => {
    const id = event.target.id;
    this.setState({
      [id]: event.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    //setIsLoading(true);
    try {
      await this.createNID({
        type: this.state.type,
        retrieve_method: "ManualSubmit",
        editorID: this.state.editorID,
        article_url: this.state.sourceURL,
        article_domain: this.state.sourceDomain,
        authors: this.state.authors,
        categories: this.state.categories,
        keywords: this.state.keywords,
        stocks: this.state.stocks,
        picture: this.state.imageURL,
        title: this.state.title,
        cta: this.state.cta,
        summary: this.state.summary,
        html: this.state.htmlContent
      });
      //clear form values after submit complete
      this.setState({
        type: "",
        editorID: "",
        sourceURL: "",
        sourceDomain: "",
        authors: "",
        categories: "",
        keywords: "",
        stocks: "",
        imageURL: "",
        title: "",
        cta: "",
        summary: "",
        htmlContent: ""
      });
    } catch (e) {
      console.log(e);
    }
  }
  createNID = content => {
    return API.post("nid", "/nid", {
      body: content
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <InputLabel htmlFor="type">Type</InputLabel>
                <NativeSelect
                  required
                  value={this.state.type}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'type',
                    id: 'type',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"news"}>News</option>
                  <option value={"article"}>Article</option>
                  <option value={"video"}>Video</option>
                </NativeSelect>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="editorID"
                  name="editorID"
                  label="Editor ID"
                  placeholder="News"
                  value={this.state.editorID}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="sourceURL"
                  name="sourceURL"
                  label="Source URL"
                  placeholder="URL for article / video"
                  value={this.state.sourceURL}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="sourceDomain"
                  name="sourceDomain"
                  label="Source Domain"
                  placeholder="e.g. https://www.thestar.com"
                  value={this.state.sourceDomain}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="authors"
                  name="authors"
                  label="Author(s)"
                  placeholder="comma-seperated"
                  value={this.state.authors}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="categories"
                  name="categories"
                  label="Categories"
                  placeholder="e.g. business,tech,world,..."
                  value={this.state.categories}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="keywords"
                  name="keywords"
                  label="Keywords"
                  placeholder="e.g. trump,climate change,lockdown,..."
                  value={this.state.keywords}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="stocks"
                  name="stocks"
                  label="Stocks"
                  placeholder="e.g. ACB,AAPL,FB,..."
                  value={this.state.stocks}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="imageURL"
                  name="imageURL"
                  label="Image URL"
                  value={this.state.imageURL}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="title"
                  name="title"
                  label="Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="cta"
                  name="cta"
                  label="Call To Action"
                  value={this.state.cta}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} xs={6}>
                <TextField
                  id="summary"
                  name="summary"
                  label="Summary"
                  multiline="true"
                  rows="4"
                  rowsMax="4"
                  value={this.state.summary}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="htmlContent"
                  name="htmlContent"
                  label="HTML"
                  multiline="true"
                  rows="8"
                  rowsMax="12"
                  value={this.state.htmlContent}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
              <Grid item sm={3}>
                <AmplifySignOut />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </React.Fragment>
    );
  }

}


export default withStyles(styles)(NidAddForm);