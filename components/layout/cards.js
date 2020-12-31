/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Pie from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "19em",
		minWidth: "19em",
		minHeight: "23em",
		margin: "0 auto",
		display: "relative",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

function PieChart(props) {
	const { data_carbohidratos, data_proteina, data_grasas } = props;
	return (
		<Pie
			data={{
				labels: ["Grasas", "Proteínas", "Carbohidratos"],
				datasets: [
					{
						label: "Rainfall",
						backgroundColor: ["#1565c0", "#ff8f00", "#2e7d32"],
						hoverBackgroundColor: ["#0d47a1", "#ff6f00", "#1b5e20"],
						data: [data_carbohidratos, data_proteina, data_grasas],
					},
				],
			}}
			options={{
				title: {
					display: true,
					text: "Cada Porcion Contiene:",
					fontSize: 20,
				},
				legend: {
					display: true,
					position: "right",
				},
			}}
		/>
	);
}

export default function RecipeReviewCard(props) {
	const {
		id,
		comentarios,
		creado,
		descripcion,
		Ingredientes,
		Preparacion,
		empresa,
		nombre,
		url,
		urlimagen,
		votos,
		carbohidratos,
		proteina,
		grasas,
	} = props;

	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				action={
					<Link href="/productos/[id]" as={`/productos/${id}`}>
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					</Link>
				}
				title={nombre}
				subheader={`Publicado hace ${formatDistanceToNow(new Date(creado), {
					locale: es,
				})}`}
			/>

			<CardMedia className={classes.media} image={urlimagen} title="Paella dish" />

			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{/* Descripción */}
					{descripcion}
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>

				<IconButton aria-label="share">
					<YouTubeIcon />
				</IconButton>

				<span>Mira en Youtube</span>

				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Ingredientes</Typography>
					<Typography paragraph>{Ingredientes}</Typography>

					<Typography paragraph>Preparación</Typography>
					<Typography paragraph>{Preparacion}</Typography>

					<Typography paragraph>Información Nutrimental</Typography>
					<div>
						<PieChart
							data_carbohidratos={carbohidratos}
							data_proteina={proteina}
							data_grasas={grasas}
						/>
					</div>
				</CardContent>
			</Collapse>
		</Card>
	);
}
